import config from '~/config';

// Layouts
import layouts, { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Feedback from '~/pages/Feedback';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import ShowTime from '~/pages/ShowTime';
import YourTicket from '~/pages/YourTicket';
import MovieList from '~/pages/MovieList';
import BookingSeat from '~/pages/BookingSeat';
import Payment from '~/pages/Payment';
import MovieDetail from '~/pages/MovieDetail/index';
import FeedbackDetail from '~/pages/FeedbackDetail';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.feedback, component: Feedback },
    { path: config.routes.showtime, component: ShowTime },
    { path: config.routes.yourticket, component: YourTicket },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.movielist, component: MovieList },
    { path: config.routes.payment, component: Payment, layout: HeaderOnly },
    { path: config.routes.moviedetail, component: MovieDetail, layout: HeaderOnly },
    { path: config.routes.feedbackdetail, component: FeedbackDetail, layout: HeaderOnly },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.bookingseat, component: BookingSeat, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
