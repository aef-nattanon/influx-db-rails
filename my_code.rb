# require 'influxdb-client'

# # You can generate a Token from the "Tokens Tab" in the UI
# token = '7wQejxjJ5FVj4IpXU2SdgAOngBvjAc8Nro3QcbsDj6Q1A7rwB5zWP6wxqge2v8DVlb5PXIFOBTOUg6viiStuTw=='
# org = 'my-org'
# bucket = 'my-bucket-1'

# client = InfluxDB2::Client.new('http://localhost:8086', token,
#                                precision: InfluxDB2::WritePrecision::NANOSECOND)

# # write_api = client.create_write_api
# # # data
# # data = 'mem,host=host1 used_percent=23.43234543'
# # write_api.write(data: data, bucket: bucket, org: org)
# # #####################################################
# # # point
# # point = InfluxDB2::Point.new(name: 'mem')
# #                         .add_tag('host', 'host1')
# #                         .add_field('used_percent', 23.43234543)
# #                         .time(Time.now.utc, InfluxDB2::WritePrecision::NANOSECOND)
# # write_api.write(data: point, bucket: bucket, org: org)
# # #####################################################
# # # hash
# # hash = { name: 'h2o',
# #          tags: { host: 'aws', region: 'us' },
# #          fields: { level: 5, saturation: '99%' },
# #          time: Time.now.utc }
# # write_api.write(data: hash, bucket: bucket, org: org)
# # #####################################################
# # # Batch Sequence to write data
# # point = InfluxDB2::Point.new(name: 'mem')
# #                         .add_tag('host', 'host1')
# #                         .add_field('used_percent', 23.43234543)
# #                         .time(Time.now.utc, InfluxDB2::WritePrecision::NANOSECOND)

# # hash = { name: 'h2o',
# #          tags: { host: 'aws', region: 'us' },
# #          fields: { level: 5, saturation: '99%' },
# #          time: Time.now.utc }
# # data = 'mem,host=host1 used_percent=23.23234543'
# # write_api.write(data: [point, hash, data], bucket: bucket, org: org)
# # #####################################################
# # query
# query = 'from(bucket: "' + bucket + '") |> range(start: -1h)'

# puts query
# tables = client.create_query_api.query(query: query, org: org)

# puts tables
