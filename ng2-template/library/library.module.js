import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library.component';
export var LibraryModule = (function () {
    function LibraryModule() {
    }
    LibraryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        CommonModule
                    ],
                    declarations: [LibraryComponent],
                    exports: [LibraryComponent],
                    bootstrap: [LibraryComponent]
                },] },
    ];
    /** @nocollapse */
    LibraryModule.ctorParameters = function () { return []; };
    return LibraryModule;
}());
//# sourceMappingURL=library.module.js.map