let data = `Malang, 20100101341509
Surabaya, 20090101140815
Malang, 20130905071413
Balikpapan, 20150723030802
Balikpapan, 2015072235959
Surabaya, 20150805030200
Balikpapan, 20150911120000
Malang, 20130906154022
Malang, 20160513133300
Malang, 20160102151222
Malang, 20160102143430
Malang, 20160102151501
Malang, 20160102094909
Malang, 20160102100533
Malang, 20160229221311`

const sortingCityTimestamp = ( ...data ) => {
    if( data.length == 0 || !data[0] ) return false     // validate if data failed to import
    let split_data = data[0].split('\n')                // splitting data

    // map data by city & timestamp
    let arr_obj_data = []
    for( var element of split_data ) {
        arr_obj_data.push({
            city: element.split(',')[0].trim(),
            timestamp: element.split(',')[1].trim(),
        })
    }
    let unsorted_data = new Array(...arr_obj_data)  // saving unsorted data
    
    // sort data by timestamp
    let sorted_data = arr_obj_data.sort((a,b) => a.timestamp - b.timestamp)

    // group data by city
    let grouped_data = sorted_data.reduce((r, element) => {
        r[element.city] = r[element.city] || [];
        r[element.city].push(element.timestamp);
        return r;
    }, Object.create(null));

    // concatting output to string
    let output = ''
    for( var element of unsorted_data ) {
        if( element['city'] ) output += element['city'] + parseInt(grouped_data[element['city']].indexOf(element['timestamp']) + 1) + '\n'
    }
    return output
}

console.log(sortingCityTimestamp(data))