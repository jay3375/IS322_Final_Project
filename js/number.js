﻿document.getElementById("number").onblur =function (){    
    this.value = parseFloat(this.value.replace(/,/g, ""))
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    document.getElementById("number").value = this.value.replace(/,/g, "")
    
}