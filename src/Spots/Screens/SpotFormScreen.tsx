// Formik x React Native example
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import SubmitButton from '../../Components/SubmitButton';
import {Dropdown} from 'react-native-element-dropdown';
import spotService from '../Services/SpotService';

export const SpotFormScreen = (props: any) => {
    const [spotTypes, setSpotTypes] = useState([
        { label: 'Rail', value: 'rail' },
        { label: 'Park', value: 'park' },
        { label: 'Bank', value: 'bank' },
        { label: 'Ledge', value: 'ledge' },
    ]);

    const handleSubmit = (values : any) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('type', values.type);
        spotService.createSpot(formData);
    }

    return (
        <Formik 
            initialValues={{
                name: '',
                type: '',
            }}
            onSubmit={async (values) => handleSubmit(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, setFieldValue, isSubmitting, values }) => (
                <View>
                    <Text style={styles.text}>Spot name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholder='e.g., FDR Skatepark'
                    />
                    <Text style={styles.text}>Spot type:</Text>
                    <Dropdown 
                        style={styles.input}
                        data={spotTypes}
                        labelField='label'
                        valueField='value' 
                        value={values.type}
                        onChange={item => setFieldValue('type', item.value)}
                        placeholder='Select spot type'
                    />
                    <SubmitButton onPress={handleSubmit} title="Submit" disabled={isSubmitting} />
                </View>
            )}
        </Formik>
    )
};

const styles = StyleSheet.create({
    text: {
        padding: 10,
        marginTop: -10,
        paddingBottom: -5,
        marginLeft: 10,
        fontSize: 14,
        color: '#2e2d2d',
        alignContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        margin: 16,
        padding: 8
    },
    formcontainer: {
        backgroundColor: '#F1E8E6',
        justifyContent: 'center'
    },
    maincontainer: { 
        justifyContent: 'center'
    }
})