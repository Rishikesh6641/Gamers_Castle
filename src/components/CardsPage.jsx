import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import product1img from '../Images/product_01.jpg'
import product2img from '../Images/product_02.jpg'
import product3img from '../Images/product_03.jpg'
import product4img from '../Images/product_04.jpg'
import product5img from '../Images/product_05.jpg'
import product6img from '../Images/product_06.jpg'

export function CardsPage() {
    return (
        <div style={{ marginTop: '50px' }}>
            <p><h3>Latest <span style={{color:'red'}}>Products's</span></h3></p>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={product1img} />
                    <Card.Body>
                        <Card.Title><a href="game%20img%20and%20video/gta5.html"  style={{ textDecoration: 'none' , color:'blueviolet'}}><h4>Grand Theft Auto V</h4></a></Card.Title>
                        <Card.Text>
                        Grand Theft Auto V is an action-adventure game developed by Rockstar Games. Players control three protagonists as they plan and execute heists.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={product2img} />
                    <Card.Body>
                        <Card.Title><a href="game%20img%20and%20video/fifa.html"  style={{ textDecoration: 'none', color:'blueviolet' }}><h4>EA SPORTS™ FIFA 23</h4></a></Card.Title>
                        <Card.Text>
                        EA SPORTS™ FIFA 23 is a football simulation video game. It features real-world football teams and leagues, offering an immersive experience with modern football.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={product3img} />
                    <Card.Body>
                        <Card.Title><a href="game%20img%20and%20video/csgo.html"  style={{ textDecoration: 'none', color:'blueviolet' }}><h4>Counter-Strike: Global Offensive</h4></a></Card.Title>
                        <Card.Text>
                        Counter-Strike: Global Offensive is a multiplayer tactical shooter game. It pits teams of terrorists against counter-terrorists in various game modes.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>


            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={product4img} />
                    <Card.Body>
                        <Card.Title> <a href="game%20img%20and%20video/valorant.html"  style={{ textDecoration: 'none', color:'blueviolet' }}><h4>VALORANT</h4></a></Card.Title>
                        <Card.Text>
                        VALORANT is a free-to-play multiplayer tactical first-person shooter developed by Riot Games. It mixes tactical shooting with hero-based abilities
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={product5img} />
                    <Card.Body>
                        <Card.Title><a href="game%20img%20and%20video/cricket.html"  style={{ textDecoration: 'none' , color:'blueviolet' }}><h4>Cricket 22</h4></a></Card.Title>
                        <Card.Text>
                        Cricket 22 is a cricket simulation video game featuring a range of domestic and international cricket competitions. It offers realistic gameplay and graphics.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={product6img} />
                    <Card.Body>
                        <Card.Title><a href="game%20img%20and%20video/horizonzero.html"  style={{ textDecoration: 'none', color:'blueviolet' }}><h4>Horizon Zero Dawn™ Complete Edition</h4></a></Card.Title>
                        <Card.Text>
                        Horizon Zero Dawn™ is an action RPG where you control Aloy, a hunter and archer in a world overrun by robots. The Complete Edition includes all DLCs.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}
