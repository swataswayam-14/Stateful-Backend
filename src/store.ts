interface Game {
    id:string;
    whitePlayer: string;
    blackPlayer: string;
    moves: string[];
}

//rather than exporting the games variable directly we export a class which has its own logic for managing games

export class GameManager{
    games:Game[] = [];
    private static instance: GameManager;
    private constructor(){
        this.games = [];
    }
    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance;
        }
        GameManager.instance = new GameManager();
        return this.instance;
    }
    addMove(gameId:string , move:string){
        console.log(`adding move ${move} to game with id ${gameId}`);
        const game = this.games.find(game => game.id === gameId)
        game?.moves.push(move)
    }

    addGame(gameId:string){
        const game = {
            id:gameId,
            whitePlayer:'Alice',
            blackPlayer:'Bob Jack',
            moves:[]
        }

        this.games.push(game);
    }
    log(){
        console.log(this.games);
    }
}
export const gameManager = GameManager.getInstance()//single instance of gameManager variable that can be used accross all the files