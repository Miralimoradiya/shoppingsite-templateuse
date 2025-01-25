import React from 'react';
import { Link, Element, } from 'react-scroll';

function Home() {
  return (
    <div>
      <header style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '10px 0',
        width: '100%',
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Link 
            to="about" 
            smooth={true} 
            duration={500} 
            style={{
              backgroundColor: '#555',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              textDecoration: 'none'
            }}
          >
            About
          </Link>
        </nav>
      </header>

      <section style={{
        height: '100vh',
        backgroundColor: '#f0f0f0'
      }}>
        <h1>Welcome to the Page</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem omnis illum quae soluta quasi aperiam ex facere hic maxime temporibus doloribus at, voluptates beatae expedita magni cupiditate rerum officia quo maiores id. Sint tenetur dignissimos illo eligendi obcaecati. Harum odio, corporis qui distinctio autem nihil deleniti? Dolore quo sint nobis repellat. Ipsa id quisquam tempore rem ducimus dicta numquam perferendis fugiat incidunt nam! Architecto, exercitationem. Sunt possimus quos voluptates vitae, repudiandae assumenda? Dolorum, repellendus, exercitationem in obcaecati voluptatibus earum animi deserunt ut itaque cumque corrupti esse harum odit! Aut iste, iusto, amet ullam doloremque reprehenderit saepe rerum eum optio dolorum asperiores commodi laborum non illum omnis nulla? Architecto natus maiores porro qui blanditiis distinctio nam corporis. Quam explicabo earum voluptates nobis fuga soluta deleniti nemo, nisi officia sit impedit nostrum sunt delectus corrupti modi mollitia deserunt? Natus maiores tempora suscipit beatae mollitia qui culpa ipsa obcaecati itaque, ab inventore sequi placeat iure doloremque veniam sit ad tenetur quaerat, voluptatem, voluptates exercitationem rem laborum id dolorem! Dolore explicabo, perspiciatis, fugit sed amet ex, quisquam eius dolores obcaecati consequatur tempore. Iure saepe sed amet ipsam, beatae enim minus labore officiis ut nam, animi quaerat. Iure unde aliquam ducimus molestias quis praesentium pariatur voluptatem quas iste ea, ex, corrupti eaque amet impedit in error dicta illum distinctio deleniti commodi alias et obcaecati non. Ipsam dolor aliquam necessitatibus animi quos, iusto nesciunt provident rem corporis atque temporibus aspernatur rerum nostrum laborum illo culpa voluptatum facere est quia molestiae obcaecati ab et voluptatibus! Repellat corporis autem sunt, quam eos minus facilis commodi dignissimos distinctio ipsum modi hic. Quaerat, quo doloribus. Eum quasi repellat qui possimus sit cupiditate cum? Totam, nisi molestias consectetur suscipit repellat aut deleniti pariatur quidem, beatae rem quis. Ab quis vero maiores! Distinctio lectus corrupti maiores nam vel nisi voluptas dolor. Porro obcaecati ipsum omnis minus natus aliquamrunt, repellendus aperiam quia aliquid facilis, iusto asperiores debitis qui ab vero distinctio sit quam placeat, ratione labore! Omnis, reiciendis libero vitae eius dolorum illum!
      </section>

      <Element name="about" style={{
        height: '100vh',
        backgroundColor: '#e0e0e0'
      }}>
        <h2>About Section</h2>
        <p>This is the About section of the page.</p>
      </Element>

      <section style={{
        height: '100vh',
        backgroundColor: '#d0d0d0'
      }}>
        <h2>Another Section</h2>
        <p>This is another section of the page.</p>
      </section>
    </div>
  );
}

export default Home;
