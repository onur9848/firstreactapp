import { StyleSheet, View, Text, VirtualizedList, Dimensions, Image } from "react-native";

function MeasuremantTable({ children }) {
    const deviceWidth = Dimensions.get('window').width - 40;

    return (
        <View style={styles.rootContainer}>
            <View style={styles.rowColumns}>
                <View style={styles.columnDirect}>
                    <View style={{
                        width: deviceWidth / 2,
                        height: 100,
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        paddingHorizontal: 15
                    }}>
                        <View style={{
                            backgroundColor: 'gray',
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            alignItems: 'center'
                        }}>
                            <Text>Tarih: </Text>
                        </View>
                        <View style={{
                            backgroundColor: 'black',
                            paddingVertical: 10,
                            paddingHorizontal: 30,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                        }}>
                            <Text style={{color:'white'}}>11.11.1998 </Text>
                        </View>

                    </View>
                    <View style={styles.rowColumns}>
                        {/* tablo */}
                        <View style={styles.textContainer}>
                            <Text style={styles.textstyle}>{children}</Text>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.textstyle}>2. Sütün</Text>
                        </View>
                        <View style={styles.textContainerend}>
                            <Text style={styles.textstyle}>3. Sütün</Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#C5B0B0',
                    flex: 1,
                    height: 300

                }}>
                    <Image source={require('.../assets/body_measurement_image.png')}/>
                </View>
            </View>
        </View>

    )
}

export default MeasuremantTable;

const topRadius = 15;

const styles = StyleSheet.create({
    rootContainer: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
    },
    textstyle: {
        fontSize: 14,
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 8,
        borderColor: 'black',
        borderEndWidth: 1,
        borderBottomWidth: 2
    },
    textContainerend: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 8,
        borderColor: 'black',
        borderBottomWidth: 2
    },
    rowColumns: {
        flexDirection: 'row',
    },
    columnDirect: {
        flexDirection: 'column'
    }
})