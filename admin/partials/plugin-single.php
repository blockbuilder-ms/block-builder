<?php

/**
 * Builder Plugin Single
 * Template for showing a plugin block in the generated interface to handle initial contact 
 * with the user.
 * 
 * @since 0.1
 * @version 0.1
 */

/**
 * Make sure $plugin is set correctly.
 */
if (!isset($plugin) || !is_object($plugin)) {
    return;
}

$name = $plugin->getName();
$description = $plugin->getDescription();
$author = $plugin->getAuthor();
$authorUrl = $plugin->getAuthorUrl();
$thumbnail = $plugin->getThumbnail();
$version = $plugin->getVersion();

$active = $plugin->isActive();
$hasSettings = $plugin->hasSettingsModal();
$settingsId = $plugin->getSettingsDomId();
?>

<div id="block-single" data-plugin="<?php echo $plugin; ?>" class="col-12 mb-4">
    <div class="inner bg-white px-2 py-2 flex flex-wrap mx-2">
        <?php if ($thumbnail !== '') : ?>
            <div class="thumbnail w-full mb-2">
                <img class="w-full" src="<?php echo $thumbnail; ?>">
            </div>
        <?php endif; ?>
        <h2 class="mx-0 my-0 text-sm w-full">
            <span class="flex items-center justify-between w-full">
                <span class="flex items-center">
                    <?php
                    if ($active) :
                    ?>
                        <span style="width:16px;height:16px;background:#2b7f3a;margin-right:8px;" data-active_color="#2b7f3a" data-inactive_color="#f35252" class="circle-signal rounded-full"></span>

                    <?php
                    elseif (!$active) :
                    ?>
                        <span style="width:16px;height:16px;background:#f35252;margin-right:8px;" data-active_color="#2b7f3a" data-inactive_color="#f35252" class="circle-signal rounded-full"></span>

                    <?php
                    endif;
                    ?>
                    <span class="block"><?php echo $name ?></span>
                    <?php
                    if ($active && $hasSettings) :
                    ?>
                        <a title="Click to view plugin settings" x-action="modal" x-method="toggle" x-options='{"data-id":"<?php echo $settingsId ?>"}' class="cursor-pointer opacity-25 hover:opacity-100 ease-in-out duration-200 transition-all" style="margin-left:8px;">
                            <svg xmlns="http://www.w3.org/2000/svg" style="width:16px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a>
                    <?php
                    endif;
                    ?>
                </span>
                <span class="flex items-center">

                    <?php
                    if ($active) :
                    ?>
                        <a title="Click to deactivate plugin" x-action="event" x-options='{"name":"bb-plugin-deactivate-before","attributes":{"plugin":"<?php echo $plugin; ?>"}}' class="cursor-pointer opacity-25 hover:opacity-100 ease-in-out duration-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    <?php
                    elseif (!$active) :
                    ?>
                        <a title="Click to activate plugin" x-action="event" x-options='{"name":"bb-plugin-activate-before","attributes":{"plugin":"<?php echo $plugin; ?>"}}' class="cursor-pointer opacity-25 hover:opacity-100 ease-in-out duration-200 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    <?php
                    endif;
                    ?>

                </span>
            </span>
            <small class="flex text-xs font-regular text-wide mt-2">
                <?php
                if ($authorUrl !== '' && $authorUrl !== '#') :
                ?>
                    <a target="_blank" href="<?php echo $authorUrl ?>"><?php echo $author ?></a>
                <?php
                else :
                    echo $author;
                endif;
                ?>
            </small>
            <small class="flex text-xs font-regular text-wide mt-1">
                Version: <?php echo $version ?>
            </small>
        </h2>

        <p class="plugin-description text-xs">
            <?php echo $description ?>
        </p>
    </div>
</div>