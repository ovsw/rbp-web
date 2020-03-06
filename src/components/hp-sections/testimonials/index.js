/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import Slider from 'react-slick'

import TestimonialItem from './testimonial-item'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// images
import SectionBg from '../../../images/img-bg-2.png'

function NextArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      // style={{...style}}
      onClick={onClick}
      sx={{
        left: '-2rem',
        '&::before': {
          color: 'primary',
          fontSize: '2rem'
        }
      }}
    />
  )
}

function PrevArrow (props) {
  const {className, style, onClick} = props
  return (
    <div
      // style={{...style}}
      className={className}
      sx={{
        right: '-1rem',
        '&::before': {
          fontSize: '2rem',
          color: 'primary'
        }
      }}
      onClick={onClick}
    />
  )
}

const TestimonialsSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    // fade: true,
    // adaptiveHeight: true
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul style={{
          position: 'relative', top: '50px', padding: '0'}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          bg: 'primary',
          color: 'light',
          borderRadius: '100%',
          '.slick-active & ': {
            bg: 'accent',
            color: 'primaryDark',
            boxShadow: '0 0 6px #008080'
          }
        }}
      >
        {i + 1}
      </div>
    )
  }
  return (
    <section sx={{
      variant: 'sections.hpSection',
      py: [5, 5, 5, 6],
      pb: [6, 5, 5, 6],
      background: `url(${SectionBg}) no-repeat bottom left`,
      backgroundSize: 'cover',
      marginBottom: '-3rem',
      position: 'relative',
      zIndex: '2'
    }}>
      <Styled.h1 as='h2' sx={{textAlign: 'center'}}>What Parents Say</Styled.h1>
      <Container sx={{maxWidth: '6xl', px: ['2.8rem', 5, 0]}}>
        <Slider {...settings}>
          {testimonialsContentTemp.map(testimonial => <TestimonialItem {...testimonial} key={testimonial.name} />)}
        </Slider>
      </Container>
    </section>
  )
}

const testimonialsContentTemp = [
  {
    name: 'Alex Reznik',
    text: 'This is a Great Camp!! Our children have been going to Rambling Pines since they were in Kindergarten and our oldest is now a counselor. The Camp has wonderful owners and very friendly and helpful staff. Everyone is very attentive to the children. Driving into the camp, you see the children participating in so many various activities. There is something amazing about growing up with summers at Ramblings Pines, making great friends, and then working at the camp. Our boys have so many memories at Rambling Pines and they look forward to going back every Summer.'
  },
  {
    name: 'Kenneth Kim',
    text: 'This is a Great Camp!! Our children have been going to Rambling Pines since they were in Kindergarten and our oldest is now a counselor. The Camp has wonderful owners and very friendly and helpful staff. Everyone is very attentive to the'
  },
  {
    name: 'David Shapiro',
    text: 'My daughter went to multiple camps in the Princeton/Pennington, area, and year after year enjoyed them, but was never fully satisfied. Then she went to Rambling Pines. The environment they provided for her was incredible! She loved it. It was the only camp she actually asked us to extended her time there for the following season. The Jordan family are committed to providing their campers a really fun and engaging time, with a lot of activities, in a very well maintained camp setting. 5 Star Ratings. I highly recommend. Thanks.'
  },
  {
    name: 'Ellana Sulla',
    text: 'My Daughter started going to this camp 3 years ago. She was 6 years old was very hesitant because she didn’t know anyone.  The staff starting from the bus driver at pick up to the bus  counselor and camp counselor where amazing.   She camp home her first day and loved it.  Everyone there is warm accommodating and friendly.  You can see and feel they all love what they do. All the way up  to the owners.   What else can a parent want.'
  },
  {
    name: 'Amy O\'Donnell',
    text: 'My first grade daughter will be spending her 4th summer at Rambling Pines, and we couldn\'t be happier!  There are so many reasons that we love his camp: the bus service that picks her up at our door,  the awesome facilities (including 2 pools, mini golf, large indoor gym, arts room, horses etc.),  the very high staff to child ratio, the kind and creative staff, the yummy kid-oriented lunches and snacks, and so much more.  My daughter comes back every day with a smile on her face, ready to tell me all her adventures, and in my opinion that is what summer should be!'
  },
  {
    name: 'Suzan Milman',
    text: 'I find Rambling Pines to be a very nurturing and supportive environment for our children. I have always felt that my children are in safe and loving hands when they are at this camp. My three kids always come off the bus with a smile on their faces and some exciting story to share.  Even my most introverted child can’t wait to get back the very next day!'
  },
  {
    name: 'Nicole Klein',
    text: 'I\'m in my 30\'s and remember my own fun summers at Rambling Pines. Both my children go there (3 & 7) and they absolutely love it.  They come home with huge smiles on their faces [...] The bus service is a huge bonus for me as the pick and and drop off door to door.  This camp is family run and a has great professional staff that keep parents aware of what is going on. I never had anything but good experiences with the enthusiastic councelors. I know my kids are safe there and the nurse is very attentive.'
  }
]

export default TestimonialsSection
