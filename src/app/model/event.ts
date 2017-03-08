import { User } from './user';
import { Commit } from './commit';

export class Event {
    author: User;
    commit: Commit;
    sha: string;
    url: string;
}
