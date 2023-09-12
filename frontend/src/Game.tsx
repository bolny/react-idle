import { Component } from "react";
import CurrentFightInfo from "./CurrentFightInfo";
import PlayerInfo from "./PlayerInfo";

class Game extends Component {
    state: GameStateT = {
        monsterName: "Skeleton",
        monsterHp: 18,
        playerWeapon: "Short Sword",
        playerDamage: "1d6",
    };

    handleMonsterDamage = (): void => {
        if (this.state.monsterHp <= 0) {
            this.setState({
                monsterName:
                    this.state.monsterName == "Skeleton"
                        ? "Zombie"
                        : "Skeleton",
                monsterHp: 18,
            });
        } else {
            this.setState({
                monsterName: this.state.monsterName,
                monsterHp:
                    this.state.monsterHp -
                    this.rollDie(this.state.playerDamage),
            });
        }
    };

    rollDie = (die: string): number => {
        let [numRolls, dieType]: string[] = die.split("d");
        let sum: number = 0;
        for (let _ = 0; _ < parseInt(numRolls); _++) {
            sum += Math.floor(Math.random() * parseInt(dieType));
        }
        return sum;
    };

    componentDidMount(): void {
        setInterval(this.handleMonsterDamage, 1000);
    }

    render(): JSX.Element {
        return (
            <>
                <CurrentFightInfo
                    name={this.state.monsterName}
                    hp={this.state.monsterHp}
                />
                <PlayerInfo
                    weapon={this.state.playerWeapon}
                    damage={this.state.playerDamage}
                />
            </>
        );
    }
}

type GameStateT = {
    monsterName: string;
    monsterHp: number;
    playerWeapon: string;
    playerDamage: string;
};

export default Game;
