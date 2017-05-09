//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //The this keyword is like a pronoun used to reference to an object where the this key was invoked 

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer 1. has to be delcared in a constructor function with new or in the function in an object
      //Explicit using bind, call or apply.  Implicit left of the dot or called function referring back to the this word
      //default which is the window. 

  // 3) What is the difference between call and apply?

      //apply uses brackets as the parameter input. so the parameter is input as an array

  // 4) What does .bind do?

      //Answer bind creates a new var that is with the this key word bound to a certain context. 
      //it takes a context and binds it to the function invokation


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    var user = {
      username: "titan.murff",
      email: "titan.murff@gmail.com",
      getUsername: function () {
         return this.username;
      }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


user.getUsername();


// Write a constructor function, including method definitions, which will make the following function invocations function properly.

  function Car (make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.move = 0,
    this.moveCar = function () {
      this.move += 10;
      return this.move;
    }
  }

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

//Hint, you'll need to add a move property, with a starting value of zero, and write a moveCar function which will increment the move property by 10. The move property will be added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
 // prius.getYear().call(Car);
  // mustang.getYear().call(Car)


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.bind(myUser)(); //Fix this

//Above you're given an object, and  a function. What will the getMyUsername function return?
//Note(no tests)
  //Answer Here  it will return the username of a given object

//In the example above, what is the 'this keyword' bound to when getMyUsername runs?

  //Answer Here  the window 


//Fix the getMyUsername invocation (stored in the userName variable, at the bottom of the above code) so that userName will be equal to 'iliketurtles'.

