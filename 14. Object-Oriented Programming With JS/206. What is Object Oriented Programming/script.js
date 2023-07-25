"use strict";

/*
  // What is OOP?
    . This is a programming paradigm based on the concepts of objects. Paradigm meaning the style of the code, how we write and organize code. We use objects to describe aspects of the real world or abstract features.
    . Objects may contain data(properties) and code (methods). By using Objects, we   pack data and corresponding behavior into one block
    . In OOP, objects are self contained peices/blocks of code
      Objects are building blocks of application, and interact with one another
    . Interactions happen through a public interface(API): methods that the code outside of the objects can access and use to communicate with the object
    . this concept of OOP was developed with the goal of organizing code, to make more flexible and easier to maintain(avoid "spaghetti code")

  
  //Classes and Instance (Traditional OOP)
    we've been using objects as loose collection of data, without making them interact with one another. Also, we did not have a way to generate objects programatically, all we did was use simple objects literals. In OOP we need a new way to generate Objects from our code, to do this in traditional OOP we use something called classes

    1. Class : this is like a blueprint which can then be used to create new objects based on the rule described in the class
    2. All objects created through a class is called Instances of that class. A class itself is not an object. This blueprint(class) can then used to build different Houses(Instances)


  //  The 4 Fundamental OOP Principle: 
  //  How do we actually design classes? How do we model real-world data into classes?
    ..Abstraction, ..Encapsulation, ..Inheritance, ..Polymorphism

    1. Abstraction: this means to hide or ignore details that do not matter, this allows us to get an overview of whatever it is that we are implementing, instead of messing with details that don't matter to our implementation

    2. Encapsulation: This means to keep some propeties and methods private iside the class, so that they are not accessible from outside the class. However, some methods can be exposed as a public Interface(API). this is very important because it prevents external code from accidentally manipulating internal properties/state

    3. Inheritance: In OOP when we have two classes that are closely related, we can have one calss inherit from another class. We can have one parent class and one child class. A child class inherits all the properties from the parent class. Inheritance makes all properties and methods of a certain class available to a chiild class, which then forms a hierachical relationship between these classes. The goal of this will then be to re-use logic that is common to both classes. A child class then then have it's own propeties and methods

    4. Polymorphism: this means a child class can overwrite a method it inherites from a parent class. a mundane example will be if a child inherits a method from the parent, if you then re-write the same method again in the child class, it then over-writes the method inherited from the parent
*/
