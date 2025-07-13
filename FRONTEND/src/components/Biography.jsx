import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime maiores, veritatis, libero obcaecati, eius doloribus nihil eveniet explicabo possimus at doloremque praesentium voluptatibus quas totam. Laborum ut enim vel doloribus dolor atque eos dignissimos praesentium aliquid cum. Quia nulla obcaecati impedit deserunt vero sapiente neque eos, voluptate nesciunt tempora?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae error, nam ut inventore blanditiis quos, totam debitis quae porro est magni ipsam reiciendis laboriosam temporibus laborum asperiores autem tenetur deserunt. Numquam harum natus omnis tempora!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, optio!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi laborum maiores quae autem harum excepturi!</p>
      </div>
    </div>
  )
}

export default Biography;