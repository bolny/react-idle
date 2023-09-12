function CurrentFightInfo({ name, hp }: CurrentFightInfoT): JSX.Element {
    return (
        <>
            <h2>Now Fighting</h2>
            <div>{name}</div>
            <div>{hp} HP</div>
        </>
    );
}

type CurrentFightInfoT = {
    name: string;
    hp: number;
};

export default CurrentFightInfo;
