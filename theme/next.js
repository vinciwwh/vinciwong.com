 $( document ).ready(function() {
    var caseList = [
    'floating-community.md',
    'library-of-surveillance.md',
    'mirror-dimension.md',
    'reminsicene.md',
'tai-o-pavillion.md',
'the-blob.md',
'transition.md',
];

    current=$(location).attr('pathname').substr($(location).attr('pathname').lastIndexOf("/")+1); // get current page: just last part - page name and extension
    if($.inArray(current, caseList)!==-1) { //check if it is in array
        index=$.inArray(current, caseList);
    }
    //navigate thorough pages...
    $( ".cc-next" ).click(function() {
    if(index<caseList.length){
    cc-next=caseList[index+1];
    window.location.href = cc-next;
    }
    });

    $( ".prev" ).click(function() {
    if(index>=0){
    prev=caseList[index-1];
    window.location.href = prev;
    }
    });

    });
