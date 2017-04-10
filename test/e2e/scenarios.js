//'use strict';
//
//describe('AngularJS 어플리케이션', function() {
//	beforeEach(function() {
//		browser().navigateTo('../../app/index.html');
//	});
//	it('특별한 해시값을 지정하지 않을 경우 자동으로 /view1으로 이동', function() {
//		expect(browser().location().url()).toBe("/view1");
//	});
//	describe('메뉴1 이동', function() {
//		beforeEach(function() {
//			browser().navigateTo('#/view1');
//		});
//		it('사용자가 /view1 로 이동할 경우 1번 페이지 렌더링', function() {
//			expect(element('[ng-view] p:first').text()).
//				toMatch(/1번 페이지/);
//		});
//	});
//	describe('메뉴2 이동', function() {
//		beforeEach(function() {
//			browser().navigateTo('#/view2');
//		});
//		it('사용자가 /view2 로 이동할 경우 2번 페이지 렌더링', function() {
//			expect(element('[ng-view] p:first').text()).
//				toMatch(/2번 페이지/);
//		});
//	});
//});


'use strict';
describe('Todo App', function(){
    browser.get('index.html'); // index.html 로딩
    var ALL_TODO_LIST_SELECTOR = '.todo-list article';

    it('화면 로딩 후 ng-init에 의해 todos가 불려진 상태여야 한다.', function(){
        debugger;
        expect(element.all(by.css(ALL_TODO_LIST_SELECTOR)).count()).toEqual(2);
    });

    it('add button 클릭 시 새로운 Todo가 추가되어야 한다.', function(){
        // element를 통해 가져온 행위들은 비동기 요청으로 돌아가서 아래처럼 처리함.
        element.all(by.css(ALL_TODO_LIST_SELECTOR)).count().then(function(beforeAddTodoCount){
            // ng-model 기준으로 element를 찾는다.
            // 새로운 todo 제목을 입력받는 input을 가져오게 된다.
            var $newTodoTitle = element(by.model('newTodoTitle'));

            // 해당 input을 클릭하고, add Test라고 입력한 뒤, add 버튼을 클릭한다.
            $newTodoTitle.click();
            $newTodoTitle.sendKeys('add Test');
            element(by.css('.add-button')).click();

            // 화면에 렌더링된 Todo의 갯수가 1개 늘었는지 확인
            var $todos = element.all(by.css(ALL_TODO_LIST_SELECTOR));
            $todos.count().then(function(count){
                expect(count).toEqual(beforeAddTodoCount + 1);
            });
        });
    });
});