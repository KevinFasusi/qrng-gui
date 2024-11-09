import {NextPage} from "next";
import {useState, useEffect} from "react";

const PageComponentGenerator: NextPage = () => {

    interface GeneratorProps {
        private_key: string;
    }

    const GeneratorComponent = (props: GeneratorProps) => {

        const [key, setKey] = useState<string>("");
        useEffect(() => {
            setKey("");
        }, []);
        // call function that retrieves key and sets value.run function in setKey()
        return (
            <h1 onClick={() => setKey("Keys")}>{key} {props.private_key}</h1>
        );
    };

    return (< GeneratorComponent private_key={"something"}/>);
};

export default PageComponentGenerator