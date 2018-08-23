import * as React from "react";
// import { IAuswahlProps } from "../interfaces/IAuswahlProps";

export default class Auswahl extends React.Component<any,{}> {
    constructor(props : any) {
        super(props);
}
    public render():any {

        return (
            // <select>
            //    {this.props.collection.map(this.abc)}
            // </select>
            <div>Hello World</div>
        );
    }

    private abc(value : string):string {
       return "<option>"+value+"</option>";
    }
}