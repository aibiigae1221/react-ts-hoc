import { GreeterProp } from "./Greeter";


export interface DescriptionEnhancerProp extends GreeterProp{

    descriptionMessage: string; // 이 prop은......>
}


const withDescription = <P extends DescriptionEnhancerProp>(TargetComponent : React.ComponentType<P>) => {

    const CompleteComponent = ({welcome, ...props}: GreeterProp) => {
        return (
            <div>
                <TargetComponent {...(props as P)} descriptionMessage="abcdefg22" />  {/*<< ......... 여기서 추가해서 사용됨 */}
                <p>test test</p>
            </div>
        );
    };

    return CompleteComponent;
};

export default withDescription;