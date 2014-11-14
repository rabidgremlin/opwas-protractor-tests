describe('Opwas main page', function() {

  var todos = element.all(by.repeater('todo in todos'));

  function clearTodos()
  {
    $$('span.glyphicon-trash').click();
	expect(todos.count()).toEqual(0);
  }
  
  beforeEach(function() {
    browser.get('http://localhost:8080/opwas/');
  });


  it('should have a title', function() {   

    expect(browser.getTitle()).toEqual('One Page Web App Starter');
  });
  
  
  it('it should display a message if there are no todos', function() {    
	
	clearTodos()   
	
	expect(element(by.css('div.alert-info')).isDisplayed()).toBeTruthy();	
  });
  
  it('it should have a link that takes you to the add todo screen in the no todos message', function() {    
	
	clearTodos() 

    var noTodosMessage =  element(by.css('div.alert-info'));	
	
	expect(noTodosMessage.isDisplayed()).toBeTruthy();	
	
	var addLink = noTodosMessage.element(by.css('div.alert-info p a'));
	expect(addLink.getText()).toEqual("add one");	
	
	addLink.click();
	expect(browser.getCurrentUrl()).toMatch(/\/todos\/add/);	
  });
  
});