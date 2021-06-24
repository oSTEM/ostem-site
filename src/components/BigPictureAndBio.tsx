import * as React from "react";

export const BigPictureAndBio = (props: {
    imageSrc: string;
    alt: string;
    children: React.ReactNode;
}) => {
    return <div className="grid grid-cols-12 gap-4 items-center py-8">
        <div className="col-span-4">
            <img src={props.imageSrc} alt={props.alt} className="block mx-auto" />
        </div>
        <div className="col-span-8">
            {props.children}
        </div>
    </div>
}