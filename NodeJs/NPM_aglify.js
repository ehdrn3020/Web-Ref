###Install###
#npm install uglify-js -g //전역으로 패키지 사용,독립적 실행
#npm install uglify-js //해당 프로젝트에서만 사용

###Ex Code###
#hello.js
function hello(name){
 console.log(name)
}
hello('hidg')

# $ aglifyjs hello.js //코드상의 실행 외에 필요없는 데이터삭제
# $ aglifyjs hello.js -m //코스상의 변경해도 되는 변수명까지 적절히 정제하여 데이터절감
# $ aglifyjs hello.js -o hello.min.js -m //aglify를 hello.min.js에 저장
