import './CardSummary.css';
import Card from './Card';

const ffSeries = [
    {
        name: 'ff1',
        date: 'Dec. 11, 1987',
        summary: 'Final Fantasy is a fantasy role-playing video game developed and published by Square in 1987. It is the first game in Square\'s Final Fantasy series, created by Hironobu Sakaguchi.'
    },
    {
        name: 'ff2',
        date: 'Dec. 17, 1988',
        summary: 'Final Fantasy II is a fantasy role-playing video game developed and published by Square in 1988 for the Family Computer as the second installment of the Final Fantasy series.'
    },
    {
        name: 'ff3',
        date: 'Apr. 27, 1990',
        summary: 'Final Fantasy III is a role-playing video game developed and published by Square for the Family Computer. The third installment in the Final Fantasy series, it was released in 1990. It is the first numbered Final Fantasy game to feature the job-change system.'
    },
    {
        name: 'ff4',
        date: 'Jul. 19, 1991',
        summary: 'Final Fantasy IV, known as Final Fantasy II for its initial North American release, is a role-playing video game developed and published by Square for the Super Nintendo Entertainment System. Released in 1991, it is the fourth main installment of the Final Fantasy series.'
    },
    {
        name: 'ff5',
        date: 'Dec. 6, 1992',
        summary: 'Final Fantasy V is a fantasy role-playing video game developed and published by Square in 1992. It is the fifth main installment of the Final Fantasy series. The game first appeared only in Japan on Nintendo\'s Super Famicom. '
    },
    {
        name: 'ff6',
        date: 'Apr. 2, 1994',
        summary: 'Final Fantasy VI, also known as Final Fantasy III from its initial North American release in 1994, is a role-playing video game developed and published by Square for the Super Nintendo Entertainment System.'
    },
    {
        name: 'ff7',
        date: 'Jan. 31, 1997',
        summary: 'Final Fantasy VII is a 1997 role-playing video game developed by Square for the PlayStation console. It is the seventh main installment in the Final Fantasy series. Published in Japan by Square, it was released in other regions by Sony Computer Entertainment and is the first in the main series with a PAL release.'
    },
    {
        name: 'ff8',
        date: 'Feb. 11, 1999',
        summary: 'Final Fantasy VIII is a role-playing video game developed and published by Square for the PlayStation console. Released in 1999, it is the eighth main installment in the Final Fantasy series.'
    },
    {
        name: 'ff9',
        date: 'Jul. 7, 2000',
        summary: 'Final Fantasy IX is a 2000 role-playing video game developed and published by Square for the PlayStation video game console. It is the ninth game in the main Final Fantasy series. The plot focuses on a war between nations in a medieval fantasy world called Gaia.'
    },
    {
        name: 'ff10',
        date: 'Jul. 19, 2001',
        summary: 'Final Fantasy X is a role-playing video game developed and published by Square as the tenth main entry in the Final Fantasy series.'
    },
    {
        name: 'ff11',
        date: 'May. 16, 2002',
        summary: 'Final Fantasy XI, also known as Final Fantasy XI Online, is a massively multiplayer online role-playing game, developed and published by Square Enix as the eleventh main installment of the Final Fantasy series.'
    },
    {
        name: 'ff12',
        date: 'Mar. 16, 2006',
        summary: 'Final Fantasy XII is a role-playing video game developed and published by Square Enix. The twelfth main installment of the Final Fantasy series, it was first released for the PlayStation 2 in 2006.'
    },
    {
        name: 'ff13',
        date: 'Dec. 17, 2009',
        summary: 'Final Fantasy XIII is a science fantasy role-playing video game developed and published by Square Enix for the PlayStation 3 and Xbox 360 consoles and later for the Microsoft Windows operating system.'
    },
    {
        name: 'ff14',
        date: 'Sep. 30, 2010',
        summary: 'Final Fantasy XIV was a 2010 massively multiplayer online role-playing game for Microsoft Windows, developed and published by Square Enix. It was the original version of the fourteenth entry in the main Final Fantasy series and the second MMORPG in the series after Final Fantasy XI.'
    },
    {
        name: 'ff15',
        date: 'Nov. 29, 2016',
        summary: 'Final Fantasy XV is an action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series, it was released for the PlayStation 4 and Xbox One in 2016, Microsoft Windows in 2018, and Stadia as a launch title in 2019. '
    },
]

const CardSummary = () => {
    const FFList = ffSeries.map((el, i) => {
        return <Card key={i} name={el.name} date={el.date} summary={el.summary}/>
    })

    return (
        <div className='container'>
        {FFList}
        </div>
    )
}

export default CardSummary;