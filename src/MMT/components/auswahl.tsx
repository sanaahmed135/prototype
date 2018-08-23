import * as React from "react";
import { IAuswahlProps } from "../interfaces/IAuswahlProps";

export default class Auswahl extends React.Component<IAuswahlProps,{}> {
    constructor(props : IAuswahlProps) {
        super(props);
}
    public render(): React.ReactElement<IAuswahlProps> {

        return (
            <select>
               {this.props.collection.map(this.abc)}
            </select>
        );
    }

    private abc(value : string):string {
       return "<option>"+value+"</option>";
    }
}