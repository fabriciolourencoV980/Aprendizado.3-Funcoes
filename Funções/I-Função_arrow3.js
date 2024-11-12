let ComaparaComThis = function (param){
    console.log(this === param)
};

ComaparaComThis(global); 

    const obj = {}
    ComaparaComThis = ComaparaComThis.bind(obj);
    ComaparaComThis(global);
    ComaparaComThis(obj);

    let ComaparaComThisArrow = param => console.log(this === param)
    ComaparaComThisArrow(global); 
    ComaparaComThis(obj); 
    ComaparaComThisArrow(module.exports);

    ComaparaComThisArrow = ComaparaComThisArrow.bind(obj);
    ComaparaComThisArrow(obj);
    ComaparaComThisArrow(module.exports);