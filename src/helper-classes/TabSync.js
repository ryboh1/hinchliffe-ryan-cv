export default class TabSync {

    constructor(classNames, id){
        this._classNames = classNames
        this._id = id
        this._isLg = false
        this._buttonHasBeenClicked = false
    }

    
    get isLg(){
        return this._isLg
    }

    set isLg(newValue){
        this._isLg = newValue
    }

    get buttonHasBeenClicked (){
        return this._buttonHasBeenClicked
    }

    set buttonHasBeenClicked(newValue){
        this._buttonHasBeenClicked = newValue
    }

    syncTabs() {
        try {

            for (let theClass of this._classNames) {
                let theCorrespondingClass = (this.isLg) ? theClass : `lg-${theClass}`;
                theClass = (this.isLg) ? `lg-${theClass}` : theClass;
                let theElement = document.getElementsByClassName(`${theClass}`)[0]
                let theChild = theElement.children[0]

                if (this.isLg) {
                    theChild.addEventListener("click", () => {
                        let correspondingTab = document.getElementsByClassName(`${theCorrespondingClass}`)[0]
                        correspondingTab.children[0].click()
                    })
                }
                else {
                    theChild.addEventListener("click", () => {
                        document.getElementById(this._id).click()
                        let correspondingTab = document.getElementsByClassName(`${theCorrespondingClass}`)[0]
                        correspondingTab.children[0].click()
                    })
                }
            }

        }
        catch (e) {
            console.error(e)
        }
    }

    syncCorrespondingTabs() {
        try {
            let button = document.getElementById(this._id)
            button.addEventListener("click", () => {

                if (!this.buttonHasBeenClicked) {
                    let theInterval = setInterval(() => {
                        this.isLg = true
                        this.syncTabs()

                        clearInterval(theInterval)
                    }, 50)
                }

                this.buttonHasBeenClicked = true
            })
        }
        catch (e) {
            console.error(e)
        }
    }
}