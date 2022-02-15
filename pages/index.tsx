import { useInView } from 'react-intersection-observer';
import AnyTime from '../components/AnyTime/AnyTime';
import Bookmarks from '../components/Bookmarks/Bookmarks';
import CheckedBook from '../components/CheckedBook/CheckedBook';
import DownloadButton from '../components/DownloadButton/DownloadButton';
import DownloadNow from '../components/DownloadNow/DownloadNow';
import Footer from '../components/Footer/Footer';
import InfiniteScrollBooks from '../components/InfiniteScrollBooks/InfiniteScrollBooks';
import Introduction from '../components/Introduction/Introduction';
import Layout from '../components/Layout/Layout';
import LiveVideo from '../components/LiveVideo/LiveVideo';
import MainImage from '../components/MainImage/MainImage';
import NavBar from '../components/NavBar/NavBar';
import ReadingDiary from '../components/ReadingDiary/ReadingDiary';
import SlideComments from '../components/SlideComments/SlideComments';

export default function index() {
  const { ref: MainImage_Ref, inView: MainImage_Inview } = useInView({
    threshold: 0,
  });
  const { ref: Introduction_Ref, inView: Introduction_Inview } = useInView({
    threshold: 0,
  });
  const { ref: LIVE_REF, inView: LIVE_INVIEW } = useInView({
    threshold: 0,
  });
  const { ref: CheckedBook_Ref, inView: ChekedBook_Inview } = useInView({
    threshold: 0,
  });
  const { ref: AnyTime_Ref, inView: AnyTime_Inview } = useInView({
    threshold: 0,
  });
  const { ref: ReadingDiary_Ref, inView: ReadingDiary_Inview } = useInView({
    threshold: 0,
  });
  const { ref: InfiniteScrollBook_Ref, inView: InfiniteScrollBook_Inview } =
    useInView({
      threshold: 0,
    });
  const { ref: DownloadNow_Ref, inView: DownloadNow_Inview } = useInView({
    threshold: 0,
  });
  return (
    <>
      <Layout />
      <MainImage wRef={MainImage_Ref} wInView={MainImage_Inview} />
      <Introduction wRef={Introduction_Ref} wInView={Introduction_Inview} />
      <LiveVideo wRef={LIVE_REF} wInView={LIVE_INVIEW} />
      <CheckedBook wRef={CheckedBook_Ref} wInView={ChekedBook_Inview} />
      <AnyTime wRef={AnyTime_Ref} wInView={AnyTime_Inview} />
      <ReadingDiary wRef={ReadingDiary_Ref} wInView={ReadingDiary_Inview} />
      <InfiniteScrollBooks
        wRef={InfiniteScrollBook_Ref}
        wInView={InfiniteScrollBook_Inview}
      />
      <Bookmarks />
      <SlideComments />
      <DownloadNow wRef={DownloadNow_Ref} wInView={DownloadNow_Inview} />
      <Footer />
      <DownloadButton />
    </>
  );
}
