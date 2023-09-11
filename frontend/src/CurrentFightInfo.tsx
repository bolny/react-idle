import { Component } from "react";

class CurrentFightInfo extends Component {
    state: CurrentFightInfoStateT = { name: "Skeleton", hp: 100 };

    handleDamage = (): void => {
        if (this.state.hp <= 0) {
            this.setState({
                name: this.state.name == "Skeleton" ? "Zombie" : "Skeleton",
                hp: 100,
            });
        } else {
            this.setState({
                name: this.state.name,
                hp: this.state.hp - 20,
            });
        }
    };

    componentDidMount(): void {
        setInterval(this.handleDamage, 1000);
    }

    render(): JSX.Element {
        return (
            <>
                <div>Now fighting: {this.state.name}</div>
                <div>HP: {this.state.hp}</div>
            </>
        );
    }
}

type CurrentFightInfoStateT = {
    name: string;
    hp: number;
};

export default CurrentFightInfo;
