import withDescription, { DescriptionEnhancerProp } from "./WithDescription";

export interface GreeterProp {
    welcome: string;
}

// 여기 prop은 인헨서의 prop을 사용
const Greeter = ({welcome, descriptionMessage} : DescriptionEnhancerProp) => {
    return (
        <section>
            <h1>{welcome}</h1>
            <p>desc: {descriptionMessage}</p>
        </section>
    );
};

const greeterWithDescription = withDescription(Greeter);
export default greeterWithDescription;
