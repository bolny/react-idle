function PlayerInfo({ weapon, damage }: PlayerInfoT): JSX.Element {
    return (
        <>
            <h2>Player Info</h2>
            <div>Weapon: {weapon}</div>
            <div>Damage: {damage}</div>
        </>
    );
}

type PlayerInfoT = {
    weapon: string;
    damage: string;
};

export default PlayerInfo;
