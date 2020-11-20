export const requiredField = value => {
    if(value)
    {
        return undefined;
    }
    else
    {
        console.log("There isn't value")
        return "Field is reguired";
    }

}
export const maxLength = (count) => (value) => {
    if(value)
    {
    if(value.length > count)
    {

        return `Max length is ${count} symbols`
    }
    else
    {
        return undefined;
    }
}
    else
    {
        console.log("There isn't value")
    }
}
