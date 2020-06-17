import {Directive, HostBinding, HostListener, ElementRef} from '@angular/core' ;

@Directive({
    selector : '[appDropDown]'
})

export class DropDown{

    constructor(private _eleRef : ElementRef){}

    @HostBinding('class.show') isOpen : boolean = false ;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen ;
    }
    @HostListener('document:click', ['$event']) 
    @HostListener('document:touchstart', ['$event']) 
    toggleOpenOut(event){
        if (!this._eleRef.nativeElement.contains(event.target)) {
            this.isOpen = false ;
          }
    }
}