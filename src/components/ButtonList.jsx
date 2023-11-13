import Button from "./Button";

const ButtonList = () => {
    return (
        <div className="flex">
            <Button name="All" />
            <Button name="New" />
            <Button name="Music" />
            <Button name="Comedy" />
            <Button name="Cricket" />
            <Button name="Gaming" />
        </div>
    )
}

export default ButtonList;