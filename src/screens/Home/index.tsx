import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car'

import {
    Container,
    Header,
    TotalCars,
    HeaderContent,
    CarList
} from './styles';

export function Home() {
    const carData = {
        brand: 'porsche',
        name: "Panamera",
        rent: {
            period: "Ao dia",
            price: 340
        },
        thumbnail: 'https://png.monster/wp-content/uploads/2020/11/2018-audi-rs5-4wd-coupe-angular-front-5039562b.png'
    };

    const carDataTwo = {
        brand: 'audi',
        name: "RS 5 Coupé",
        rent: {
            period: "Ao dia",
            price: 120
        },
        thumbnail: 'https://www.sixt.com.br/fileadmin/_processed_/csm_porsche-panamera-4d-grau-2014_62aa9f4a2c.png'
    };


    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <HeaderContent>
                    <Logo
                        width={RFValue(108)}
                        height={RFValue(12)}
                    />
                    <TotalCars>
                        Total de 12 carros
                    </TotalCars>
                </HeaderContent>
            </Header>


            <CarList
                data={[1, 2, 3, 4, 5, 6, 7]}
                renderItem={({ item }) => <Car data={carData} />}
                keyExtractor={item => String(item)}
                />

        </Container>
    )
};