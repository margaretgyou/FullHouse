import { UserProfile } from './user-profile';
import { Room} from '../rooms/room';


export class SearchResult {
  room: Room;
  roommate: UserProfile;
  matchscore: number;

  constructor( values: Object = {}){
    Object.assign(this, values);
  }
}
