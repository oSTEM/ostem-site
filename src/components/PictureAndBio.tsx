import * as React from "react";

export const PictureAndBio = (props: {
    imageSrc: string;
    name: string;
    children: React.ReactNode;
}) => {
    return <div className="grid grid-cols-12 gap-4 items-center py-8">
        <div className="col-span-3">
            <img src={props.imageSrc} alt={props.name} className="block mx-auto" />
        </div>
        <div className="col-span-9">
            {props.children}
        </div>
    </div>
}
