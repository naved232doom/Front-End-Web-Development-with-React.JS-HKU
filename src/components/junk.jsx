 <Card>
            <CardImg height="auto" object src={dish.image} alt={dish.name} />
            <CardBody className="ml-5">
              <CardTitle>{dish.name}</CardTitle>
              <p>{dish.description}</p>
            </CardBody>
          </Card>
        </div>
        <div className="col-xs-12 col-md-6">
          <Card>
            <CardBody className="ml-5">
              <CardTitle>Comments</CardTitle>
              <p>
                {dish.comments.map((curcomment) => {
                  return <div key={curcomment.id}>
                      <div className='row'>
                        {curcomment.rating}  
                      </div>
                      <div className='row'>
                        {curcomment.comment}
                      </div>
                      <div className='row'>
                        {curcomment.author}
                      </div>
                      <div className='row'>
                        {curcomment.date}
                      </div>
                  </div>;
                })}
              </p>
            </CardBody>
          </Card>