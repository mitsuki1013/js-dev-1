(function() {

    var relatedToParentsProgram = document.getElementById("category-wrap").querySelectorAll('p');
    var allProgram = document.getElementById('program-list').querySelectorAll('li');

    removeTag(relatedToParentsProgram);

    /**
     * 親と紐づくidを親のidも含めて二次元配列
     * 
     * @param relatedToParentsProgram array
     */
    function getRelationalIdList(test) {
       var relationalArrayIds = [];
        for (var i = 0; i < test.length; i++) {
            toArray = Array.from(test[i].classList);
            relationalArrayIds.push(toArray);
        }
        return relationalArrayIds;
    }
    
    /**
     * それぞれのプログラムのclassを取得し、プログラムごとに配列化
     * 
     * @var allProgramClass array
     * @param className
     */
    function getAllProgramId(test) {
        var allProgramingIds = [];
        for (var i = 0; i < allProgram.length; i++) {
            var allProgramClass = test[i].classList;
            for (var ii = 1; ii < test.length; ii++) {
                allProgramingIds.push(allProgramClass[ii])
            }
        }
        return allProgramingIds;
    }
    
    /**
     * 「親タグ」及び「親タグに紐づく子タグ」の投稿の有無を、配列に格納。
     * 「親タグ」及び「親タグに紐づく子タグ」が一件もなければ「false」を返し、一件でもあれば「true」を返す。
     * 
     * @var result array
     */
    function getResult() {
        var result = [];
        for (var i = 0; i < getRelationalIdList(relatedToParentsProgram).length; i++) { //relationalArrayIds
            for (var ii = 0; ii < getAllProgramId(allProgram).length; ii++) { //allProgramingIds
                var arraySearch =  getRelationalIdList(relatedToParentsProgram)[i].some(function(value) { //relationalArrayIds
                    return value === getAllProgramId(allProgram)[ii];  //allProgramingIds
                })
                if (arraySearch === true) {
                    break;
                }
            }
            result.push(arraySearch);
        }
        return result;
    }
    
    /**
     * trueに該当するタグを削除
     */
    function removeTag(test) {
        for (var i = 0; i < getRelationalIdList(relatedToParentsProgram).length; i++) {

            if (getResult()[i] === true) {
                test[i].classList.remove('none');
            }
        }
    }

})();






