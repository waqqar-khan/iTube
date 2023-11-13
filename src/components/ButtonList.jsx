import Button from "./Button";

const ButtonList = () => {
    const categories = ["All","New","Music","Comedy","Cricket","Gaming"]
    return (
        <div className="flex">
            {categories.map((category)=><Button key={category} name={category} />)}
            
        </div>
    )
}

export default ButtonList;