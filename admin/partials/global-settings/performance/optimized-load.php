<div class="form-group w-full flex flex-wrap mt-4">
    <div class="w-full">
        <label class="w-full text-sm">
            Optimize asset loading
        </label>
        <p class="text-xs">
            Will load the assets conditionally, meaning that the assets which are not being used will not be loaded in - this will create more http requests than not using this.
            but overall size of the total requests will be alot smaller.
        </p>
        <div class="toggle-container flex mt-1">
            <input id="toggle" class="toggle" type="checkbox" role="switch" name="toggle" value="on">
            <label for="toggle" class="slot">
                <span class="slot__label">OFF</span>
                <span class="slot__label">ON</span>
            </label>
        </div>
    </div>
</div>