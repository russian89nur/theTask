import React
  from 'react';
import logo
  from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container mx-auto h-100">
      <header className="row pt-5">
        <div className="header_search">
          <input type="search" className="p-2" placeholder="Nickname of friend"/>
        </div>
        <div className="header_friends text-uppercase font-weight-bold letter-spacing-2 text-center align-self-center">
          <span className="text-white">Friends online </span><span className="color-orange">5</span>
        </div>
        <div className="header_friend_add text-right">
          <button className="header_friend_add_button border-radius-3 transition-05">
            <img src="/image/cutting/friend.png" className="mw-100 p-2" alt="icon"/>
          </button>
        </div>
      </header>

      <section className="section_friends row mt-3">

        <div className="section_friend_online px-2 row">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_new color-orange font-weight-bold position-absolute letter-spacing-2">NEW!</span>
            <span className="section_friend_nickname color-green">Yareyare-daze</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-green letter-spacing-2 ml-auto">online</span>
            <span className="section_friend_info ml-auto color-gray">Battle name</span>
          </div>
        </div>

        <div className="section_friend_online px-2 row ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements9.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_new color-orange font-weight-bold position-absolute letter-spacing-2">NEW!</span>
            <span className="section_friend_nickname color-green">[tqq] Mobisu</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-green letter-spacing-2 ml-auto">online</span>
            <span className="section_friend_info ml-auto color-gray"> </span>
          </div>
        </div>

        <div className="section_friend_online px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements2.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_new color-orange font-weight-bold position-absolute letter-spacing-2">NEW!</span>
            <span className="section_friend_nickname color-green">Glozwtg</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-green letter-spacing-2 ml-auto">online (in group)</span>
            <span className="section_friend_info ml-auto color-gray"> </span>
          </div>
        </div>

        <div className="section_friend_online px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements10.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-green">Z1pMan_06</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-green letter-spacing-2 ml-auto">online (in group)</span>
            <span className="section_friend_info ml-auto color-gray">Battle name</span>
          </div>
        </div>

        <div className="section_friend_online px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements3.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-green">Mercury_1</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-green letter-spacing-2 ml-auto">online</span>
            <span className="section_friend_info ml-auto color-gray">Battle name</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements11.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">Morty</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements4.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">ULTRASUPERMEGALONGNICKNAME</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements12.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">FrosbiteC4v3s</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements5.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements13.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">Jadecjaydev</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements6.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">Stronk</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements14.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">Striker_Wiking</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements7.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">[BOMBZ]Clan_war</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements15.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">Red_Granite</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements8.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">MasterBaki</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements3.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">GEZR_giregle</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

        <div className="section_friend_notOnline px-2 row mt-3 ml-auto">
          <div className="section_friend_img_fon position-relative mw-100 mh-100"></div>
          <img src="/image/cutting/elements1.png" className="mw-100 mh-100" alt="rank"/>
          <div className="align-self-center d-flex flex-column ml-3 position-relative">
            <span className="section_friend_nickname color-gray">TheEpic</span>
          </div>
          <div className="ml-auto d-flex flex-column align-self-center position-relative">
            <span className="section_friend_ofOn text-uppercase font-weight-bold color-gray opacity-07 letter-spacing-2 ml-auto">Offline</span>
            <span className="section_friend_info ml-auto color-gray letter-spacing-2 opacity-07">09.08.2018</span>
          </div>
        </div>

      </section>

      <section className="section_options mx-auto mt-5 row text-center text-uppercase font-weight-bold">
        <div className="col-auto ml-auto">
          <a src="javascript:void(0)" className="color-orange">friends[20/200]</a>
        </div>
        <div className="col-auto ml-4">
          <a src="javascript:void(0)" className="text-white">invited users</a>
        </div>
        <div className="col-auto ml-4">
          <a src="javascript:void(0)" className="text-white">my clan</a>
        </div>
        <div className="col-auto ml-4 mr-auto">
          <a src="javascript:void(0)" className="text-white">requests <span className="section_options_req_number color-orange px-2">99</span></a>
        </div>
      </section>
    </div>
  );
}

export default App;
