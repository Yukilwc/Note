var test={
	    createFragmentWithNode:function(elNode){
        const fragment=document.createDocumentFragment();
        let first=elNode.firstChild;
        while(first)
        {
            fragment.appendChild(first);
            first=elNode.firstChild;
        }
        return fragment;
    },
	regTest:function(){
		let reg=/ab(c)/g;
		 let text="{{abc}}def{{abcg}}hijk";
		let result=reg.exec(text);
        let result2=text.match(reg);
        let prop="abc";
        let regp=new RegExp("\\{\\{"+prop+"\\}\\}","g");
	}
}
//var el=document.querySelector('#app');
//var frag=test.createFragmentWithNode(el);
test.regTest();
