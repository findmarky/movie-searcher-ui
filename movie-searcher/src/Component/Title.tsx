import { FunctionComponent } from "react";

type TitleProps = {
    title: String;
};

export const Title: FunctionComponent<TitleProps> = ({ title }) => {
    return (
        <h1 className="title">{title}</h1>
    );
}