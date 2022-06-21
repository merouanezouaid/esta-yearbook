import React, {useEffect, useState} from 'react'
import { ParallaxLayer } from '@react-spring/parallax';
import Card from './Card'
import Github from './Github'

import Markdown from 'markdown-to-jsx';


function Yearbook() {
  const [post, setPost] = useState('');
  useEffect(() => {
    import("../data/merouanezouaid.md")
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

    return (
      <ParallaxLayer offset={1.70} speed={1}>
      <div className="object-cover">
          <p className="mb-8 text-4xl leading-relaxed">
          Yearbook :)
          </p>
            <Card />
          <p className="mt-4 leading-relaxed">
          EST GI Promo 2022 student?<br/>
          <Github />
          </p>
          <Markdown>
                {post}
            </Markdown>
          
      </div>

        </ParallaxLayer>
    )
}

export default Yearbook
