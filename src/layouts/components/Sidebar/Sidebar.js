import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
    ShowTimeIcon,
    ShowTimeActiveIcon,
    YourTicketIcon,
    YourTicketActiveIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="Home" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Feedback"
                    to={config.routes.feedback}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem
                    title="Show Time"
                    to={config.routes.showtime}
                    icon={<ShowTimeIcon />}
                    activeIcon={<ShowTimeActiveIcon />}
                />
                <MenuItem
                    title="Movie List"
                    to={config.routes.movielist}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
                <MenuItem
                    title="Your Ticket"
                    to={config.routes.yourticket}
                    icon={<YourTicketIcon />}
                    activeIcon={<YourTicketActiveIcon />}
                />
            </Menu>

            <SuggestedAccounts label="Movie is showing" />
            <SuggestedAccounts label="Movie coming soon" />
        </aside>
    );
}

export default Sidebar;
