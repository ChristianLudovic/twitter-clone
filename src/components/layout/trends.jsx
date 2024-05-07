import { Footer } from "../basis/footer";
import { SearchBar } from "../basis/searchBar";
import { FollowList } from "./followList";
import { TrendingList } from "./trendingList";

export function Trends (){
    return (
        <>
            <div className="pr-[10px] pt-[6px] w-max flex flex-col justify-between h-screen">
                <SearchBar />
                <TrendingList />
                <FollowList />
                <Footer />
            </div>
        </>
    )
}