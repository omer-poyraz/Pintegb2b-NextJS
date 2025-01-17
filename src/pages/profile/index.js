import React, { useState } from 'react'
import Pinteg from '../../components/Pinteg'
import Stories from '../../components/Stories'
import Cure from '../../components/Cure'
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap'

const ProfilePage = () => {
    const [formData, setFormData] = useState({ ticariUnvan: "", vergiDairesi: "", vergiNumarasi: "", ticaretSicilNo: "", sehir: "", adres: "", telefon1: "", mail1: "", adsoyad: "", tcno: "", mail2: "", telefon2: "" })

    return (
        <Pinteg>
            <Stories />

            <div className='profile-page'>
                <div className='mb-3'><h4>Profilim</h4></div>
                <Card className='mt-3 shadow-sm rounded-xl'>
                    <CardBody>
                        <Row>
                            <Col md={12}><div><h3>Bayilik Bilgileri</h3></div></Col>
                            <Col md={12}>
                                <div className='item mb-2'>
                                    <small>Ticari Ünvan</small>
                                    <Input type='text' placeholder='Ticari ünvan girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>Vergi Dairesi</small>
                                    <Input type='text' placeholder='Vergi dairesi girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>Vergi Numarası</small>
                                    <Input type='text' placeholder='Vergi numarası girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={12}>
                                <div className='item mb-2'>
                                    <small>Ticaret Sicil Numarası</small>
                                    <Input type='text' placeholder='Ticari sicil numarası girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>Şehir Seçin</small>
                                    <Input type='text' placeholder='' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>Adres</small>
                                    <Input type='text' placeholder='Adres girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>Telefon</small>
                                    <Input type='text' placeholder='Telefon girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>E-Mail</small>
                                    <Input type='text' placeholder='E-mail girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={12} className='mt-3'><div><h3>Yetkili Bilgileri</h3></div></Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>Ad Soyad</small>
                                    <Input type='text' placeholder='Ad soyad girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>TC Kimlik No</small>
                                    <Input type='text' placeholder='TC kimlik no girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>E-Mail</small>
                                    <Input type='text' placeholder='E-Mail girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='item mb-2'>
                                    <small>Cep Telefonu</small>
                                    <Input type='text' placeholder='Cep telefonu girin' onChange={(e) => setFormData(prev => ({ ...prev, username: e.target.value }))} />
                                </div>
                            </Col>
                            <Col md={12} className='mt-3'>
                                <div className='d-flex justify-content-end'><Button className='btn btn-warning text-white rounded-xl'>Kayıt Ol</Button></div>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </div>

            <Cure />
        </Pinteg>
    )
}

export default ProfilePage
