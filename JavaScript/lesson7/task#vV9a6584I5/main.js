
//– Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car

function Car(model, produser, year,maxSpeed, volumeEngine){
    this.model = model;
    this.produser = produser;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volumeEngine = volumeEngine;
    this.drive = function(){console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)}
    this.info = function(){
        for (const key of this) {
            console.log(key, this[key]!=='function');
        }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed =  this.maxSpeed+newSpeed};
    this. changeYear = function (year){
     if(year>1815) this.year = year
    };
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;

    }
        }
    const car= new Car('Skoda', 'Skoda Auto', 1998, 170,  1,4 );
    console.log(car);
    car.drive();
    car.info();
    car.increaseMaxSpeed(100)
    car.changeYear(2015)
    car.addDriver({})
    console.log(car)


}
