// Formik x React Native example
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import SubmitButton from '../../Components/SubmitButton';
import DropDownPicker from 'react-native-dropdown-picker';

export const SpotFormScreen = (props: any) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <Formik
            initialValues={{
                name: '',
                type: '',
            }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <Text style={styles.text}>Spot name:</Text>
                    <TextInput
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        style={{ backgroundColor: 'grey' }}
                    />

                    <Text style={styles.text}>Spot type:</Text>
                    {/* <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                /> */}
                    <SubmitButton onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
};

const styles = StyleSheet.create({
    text: {
        marginLeft: 20,
        fontSize: 18,
        alignContent: 'center'
    },
    textInput: {
        backgroundColor: 'grey',
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
    }
})