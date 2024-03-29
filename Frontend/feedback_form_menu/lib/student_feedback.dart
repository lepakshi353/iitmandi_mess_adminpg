import 'package:flutter/material.dart';
import 'Mess_menu.dart';
void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Feedback Form',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: FeedbackForm(),
    );
  }
}

class FeedbackForm extends StatefulWidget {
  final formKey=GlobalKey<FormState>();
  @override
  _FeedbackFormState createState() => _FeedbackFormState();
}

class _FeedbackFormState extends State<FeedbackForm> {
  String _feedbackType = 'Positive';
  String _subject = '';
  String _description = '';
  int _rating = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Feedback Form', style:TextStyle(fontWeight:FontWeight.w800)),
        backgroundColor: Colors.grey,

      ),
        body: Container(
          height: double.infinity,
          decoration: BoxDecoration(
    image: DecorationImage(
    image: AssetImage('assets/background.png',), // Adjust the path to your background image
    fit: BoxFit.fill,
    ),
    ),
          child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Feedback Type:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              DropdownButton<String>(
                value: _feedbackType,

                onChanged: (value) {
                  setState(() {
                    _feedbackType = value as String;
                  });
                },
                items: <String>['Positive', 'Negative']
                    .map<DropdownMenuItem<String>>((String value) {
                  return DropdownMenuItem<String>(
                    value: value,
                    child: Text(value),
                  );
                }).toList(),
              ),
              SizedBox(height: 20),
              Text(
                'Subject:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Enter subject',
                ),
                onChanged: (value) {
                  setState(() {
                    _subject = value;
                  });
                },
              ),
              SizedBox(height: 20),
              Text(
                'Description:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              TextField(
                decoration: InputDecoration(
                  hintText: 'Enter description',
                ),
                onChanged: (value) {
                  setState(() {
                    _description = value;
                  });
                },
                maxLines: null, // Allow multiple lines for description
              ),
              SizedBox(height: 20),
              Text(
                'Rating:',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  IconButton(
                    icon: Icon(Icons.star,
                        color: _rating >= 1 ? Colors.orange : Colors.grey),
                    onPressed: () {
                      setState(() {
                        _rating = 1;
                      });
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.star,
                        color: _rating >= 2 ? Colors.orange : Colors.grey),
                    onPressed: () {
                      setState(() {
                        _rating = 2;
                      });
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.star,
                        color: _rating >= 3 ? Colors.orange : Colors.grey),
                    onPressed: () {
                      setState(() {
                        _rating = 3;
                      });
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.star,
                        color: _rating >= 4 ? Colors.orange : Colors.grey),
                    onPressed: () {
                      setState(() {
                        _rating = 4;
                      });
                    },
                  ),
                  IconButton(
                    icon: Icon(Icons.star,
                        color: _rating >= 5 ? Colors.orange : Colors.grey),
                    onPressed: () {
                      setState(() {
                        _rating = 5;
                      });
                    },
                  ),
                ],
              ),
              SizedBox(height: 20),
                Center(child:ElevatedButton(
                    style:ElevatedButton.styleFrom(
                        backgroundColor:Colors.green,
                    ),
                onPressed: () {
                  // Here you can handle the submission of the feedback form

                  print('Feedback Type: $_feedbackType');
                  print('Subject: $_subject');
                  print('Description: $_description');
                  print('Rating: $_rating');
                  Navigator.push(context, MaterialPageRoute(builder: (context){
                    return Menu();
                  })
                  );
                },
                child: Text('Submit', style: TextStyle(color: Colors.black,fontWeight: FontWeight.w800,)),
              ),
                ),

            ],
          ),
        ),
      ),
      )
    );
  }
}
